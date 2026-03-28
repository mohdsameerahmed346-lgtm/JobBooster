import OpenAI from "openai";

export async function POST(req) {
  const body = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
Create a professional resume:

Name: ${body.name}
Role: ${body.role}
Education: ${body.education}
Skills: ${body.skills}
Experience: ${body.experience}

Also include:
- Cover letter
- 5 additional skills
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return Response.json({
    text: completion.choices[0].message.content,
  });
}
