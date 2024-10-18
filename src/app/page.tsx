export default function Home() {
  return (
    <div className="grid grid-rows-none items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid">
        <h1 className="font-serif text-5xl text-emerald-600">Hello World!</h1>
        
      </div>  
      <h1 className="font-sans font-semibold text-3xl text-orange-400">Milestone 1 : Installation & Hello World</h1>
      <div className="p-8">
      
        <h1 className="font-serif text-3xl text-red-600">Objective :</h1>
        <h1 className="font-normal text-2xl text-purple-800">Establish a foundational understanding of Next.js by 
          setting up the environment and creating your first application.
        </h1>
        <ul className="list-disc font-medium">
          <li>Topics Covered :</li>
            <ul className="list-decimal p-4">
              <li>Introduction to Next.js and React</li>
              <li>Setting up the development environment</li>
              <ul className="list-disc pl-4">
                <li>Introduction to Next.js and React</li>
                <li>Setting up the development environment</li>
              </ul>
              <li>Understanding file structure</li>
              <li>Creating your first Next.js application</li>
              <li>Running and building the Next.js app</li>
            </ul>
          <li>Assignments :</li>
          <ul className="list-disc p-4">
              <li>Create a &rdquo;Hello World&rdquo; Next.js application.</li>
              <li>Explore and document the folder structure of a Next.js project.</li>
          </ul>
          <li>Project :</li>
          <ul className="list-disc p-4">
              <li>Devlop a simple webpage that displays a perrsonalized &rdquo;Hello World&rdquo; message with basic styling.</li>
              
          </ul>
        </ul>


      </div>

    </div>
  );
}
