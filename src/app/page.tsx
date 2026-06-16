import Image from "next/image";

export default function Home() {
	const time = new Date().toISOString();
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main>
				<h1>Next.js 全栈部署测试</h1>
				<p>服务端时间：{time}</p>
				<a href="/api/hello">测试 API</a>
    	</main>	
		</div>
	);
}
