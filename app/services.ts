"use server"; 
  
export async function submitForm(data: FormData) {
  const name = data.get("name")?.toString();
  const message = data.get("message")?.toString();

  console.log("Form submitted:", { name, message });

  return { success: true, message: `Thanks for submitting, ${name}!` };
}
