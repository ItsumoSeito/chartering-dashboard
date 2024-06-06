import HomeHeader from '@/components/layout/HomeHeader';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800 pt-40">
      <HomeHeader />
      <h1 className="text-8xl text-white text-center">
        Welcome to the future of cargo chartering
      </h1>
    </main>
  );
}
