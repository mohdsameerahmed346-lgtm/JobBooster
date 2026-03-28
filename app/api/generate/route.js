export async function POST(req) {
  try {
    const body = await req.json();

    return Response.json({
      text: `PROFESSIONAL RESUME

Name: ${body.name}
Role: ${body.role}

----------------------------------

EDUCATION:
${body.education}

SKILLS:
${body.skills}

EXPERIENCE:
${body.experience}

----------------------------------

SUMMARY:
Motivated and passionate ${body.role} with strong skills in ${body.skills}. Ready to contribute and grow in a professional environment.

----------------------------------

COVER LETTER:

Dear Hiring Manager,

I am excited to apply for the role of ${body.role}. With my background in ${body.education} and skills in ${body.skills}, I am confident in my ability to contribute effectively to your team.

Thank you for considering my application.

Sincerely,  
${body.name}`
    });

  } catch (error) {
    return Response.json({
      text: "Error: " + error.message,
    });
  }
}
