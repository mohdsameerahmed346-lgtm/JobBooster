return Response.json({
  text: `${body.name.toUpperCase()}
${body.role}

----------------------------------

📧 Email: your@email.com | 📞 Phone: 1234567890

----------------------------------

🎯 PROFESSIONAL SUMMARY
Motivated ${body.role} with strong expertise in ${body.skills}. Passionate about learning and delivering high-quality results.

----------------------------------

🎓 EDUCATION
${body.education}

----------------------------------

🛠 SKILLS
- ${body.skills.split(",").join("\n- ")}

----------------------------------

💼 EXPERIENCE
${body.experience}

----------------------------------

📄 COVER LETTER

Dear Hiring Manager,

I am writing to express my interest in the ${body.role} position. With my background in ${body.education} and hands-on skills in ${body.skills}, I am confident in my ability to contribute effectively.

I am eager to bring value to your organization and grow professionally.

Sincerely,  
${body.name}`
});
