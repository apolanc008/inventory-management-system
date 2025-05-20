export async function submitSignUpForm(data) {
  const response = await fetch("http://localhost:3000/user", {  
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Something went wrong");
  }

  return await response.text();
}