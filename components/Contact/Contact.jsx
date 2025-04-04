'use client'
import React , { useState, useEffect, useRef }from 'react';


export default function Contact  (){
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", date: "", location: "" });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Prevent error if canvasRef is null
  
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Prevent error if getContext fails
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
  
    class Particle {
      constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(169, 149, 232, 0.5)";
        ctx.fill();
        ctx.closePath();
      }
    }
  
    function initParticles() {
      particles = [];
      for (let i = 0; i < 50; i++) {
        let size = Math.random() * 5 + 2;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = (Math.random() - 0.5) * 2;
        particles.push(new Particle(x, y, size, speedX, speedY));
      }
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }
  
    initParticles();
    animate();
  
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    });
  
    return () => window.removeEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    });
  
  }, []);
  
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment submitted:", formData);
    alert("Appointment booked successfully!");
  };
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Book an Appointment</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        className="w-full p-2 border rounded" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        className="w-full p-2 border rounded" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="date" 
        name="date" 
        className="w-full p-2 border rounded" 
        value={formData.date} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="location" 
        placeholder="Location" 
        className="w-full p-2 border rounded" 
        value={formData.location} 
        onChange={handleChange} 
        required 
      />
      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Book Now
      </button>
    </form>
  </div>
);
}
