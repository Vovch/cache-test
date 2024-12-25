export const dynamic = 'force-dynamic'
export const revalidate = 0

const fetchRandomNumbers = async () => {
    const response = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1", { cache: 'no-store', next: { revalidate: 0 } });
    const data = await response.json();
    return data;
};

export default async function Counter() {
    const numbers = await fetchRandomNumbers();

    return (
        <div>
            {numbers}
        </div>
    );
}