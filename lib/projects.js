// lib/projects.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getAllProjects() {
    // Get file names under /content/projects
    const fileNames = fs.readdirSync(projectsDirectory);

    const allProjects = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map((fileName) => {
            // Remove ".md" from file name to get slug
            const slug = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const { data } = matter(fileContents);

            // Combine the data with the slug
            return {
                slug,
                ...data,
            };
        });

    // Sort projects by date
    return allProjects.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getProjectBySlug(slug) {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse metadata and content
    const { data, content } = matter(fileContents);

    return {
        slug,
        content,
        ...data,
    };
}

export function getFeaturedProjects() {
    const allProjects = getAllProjects();
    return allProjects.filter(project => project.featured === true);
}

export function getProjectsByCategory(category) {
    const allProjects = getAllProjects();
    return allProjects.filter(project => project.category === category);
}

export function getAllCategories() {
    const allProjects = getAllProjects();
    const categories = [...new Set(allProjects.map(p => p.category))];
    return categories;
}
