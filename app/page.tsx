import { type FC } from 'react';

const items = [
  'Internet must connect people, not isolate them',
  'Internet is a tool, not a world to live within',
  'Internet belongs to everybody, accessibility and inclusivity are not optional',
  'Internet applications must be designed for common good, not for self-profit',
  'Cognitive sciences must be used to prevent addictions and bad behaviours, not to enforce them',
  'Money is an energy that must be used to build things, it’s not an end in itself',
];

const Home: FC = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2">
        <h1 className="font-bold text-4xl sm:text-5xl mb-4">
          Manifest for a positive internet
        </h1>
        <ol className="font-mono list-inside list-decimal text-xl sm:text-2xl text-left tracking-[-.01em] flex flex-col gap-12">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </main>
    </div>
  );
};

export default Home;
