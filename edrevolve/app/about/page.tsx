async function getDataTreehack() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  return data;
}

export default function AboutPage() {
    return 'About Page'
}