import { GoogleGenerativeAI } from "@google/generative-ai";

const gemini = new GoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const SYSTEM_PROMPT = `


**Prompt:**  

*"Given the following conversation summary, perform two tasks:*  

### **1. Action Extraction**  
   - Identify and extract actionable tasks, requests, or follow-ups.  
   - Extract relevant details such as dates, times, deadlines, or assigned responsibilities.  
   - Highlight key discussion points or important insights from the conversation.  

### **2. Action Generation**  
   - Convert extracted action items into clear, structured tasks with responsible persons (if mentioned).  
   - Generate a summary of key takeaways in a well-organized format.  

Ensure the response is structured, concise, and easy to read."*  

---

### **Example Output Format:**  

**🔹 Key Details:**  
- **Date/Time (if mentioned):** [Extracted Date/Time]  
- **Main Discussion Points:**  
  - [Point 1]  
  - [Point 2]  
  - [Point 3]  

**✅ Action Items:**  
1. **[Task Name]** - Assigned to [Person] (Deadline: [If Mentioned])  
2. **[Task Name]** - Assigned to [Person] (Deadline: [If Mentioned])  
3. **[Task Name]** - Assigned to [Person] (Deadline: [If Mentioned])  

--`;
export const summarize = async (content) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  // Format the messages according to Gemini's expected structure
  const prompt = SYSTEM_PROMPT + "\n\nTranscript:\n" + content;

  const result = await model.generateContent({
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  });

  const response = result.response;
  const text = response.text();

  return text;
};
