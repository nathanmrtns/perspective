'use client';

export default function Sidebar() {
    async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.files);
        const file = e?.target?.files?.item(0)
        const text = await file?.text();
        console.log(text);
    }

    return <div className="w-80 bg-white h-auto border-r-[3px]">
        <h1>Perspective</h1>
        <input type="file" onChange={handleChange}/>
    </div>
}