'use client';

import { useEffect, useRef } from 'react';

export default function FuturisticBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Grid lines
        const gridSize = 50;
        let offsetX = 0;
        let offsetY = 0;

        function drawGrid() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Set grid style
            ctx.strokeStyle = 'rgba(242, 101, 48, 0.1)';
            ctx.lineWidth = 1;

            // Draw vertical lines
            for (let x = offsetX % gridSize; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // Draw horizontal lines
            for (let y = offsetY % gridSize; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Slow animation
            offsetX += 0.2;
            offsetY += 0.2;

            requestAnimationFrame(drawGrid);
        }

        drawGrid();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.3 }}
        />
    );
}
