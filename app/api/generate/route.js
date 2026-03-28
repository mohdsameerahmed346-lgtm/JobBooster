import OpenAI from "openai";

export async function POST(req) {
  try {
    const body = await req.json();

    // 🧠 If no API key, return demo (FREE fallback)
    if (!process.env.OPENAI_API_KEY) {
      return Response.json({
        text: `Demo Resume:

Name: ${body.name}
Role: ${body.role}

Skills: ${body.skills}

This is a sample resume (API not connected yet).`
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Create a professional resume for:

Name: ${body.name}
Role: ${body.role}
Education: ${body.education}
Skills: ${body.skills}
Experience: ${body.experience}`
        }
      ],
    });

    return Response.json({
      text: completion.choices[0].message.content || "No response",
    });

  } catch (error) {
    return Response.json({
      text: "Error: " + error.message,
    });
  }
}
