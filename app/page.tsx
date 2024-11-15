import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to Hitesh Bandhu's Blog
      </h1>
      <p className="prose prose-neutral dark:prose-invert mb-4">
        {`Hey there! This is where I share my journey through the fascinating worlds of AI, startups, and technology. 
        As someone deeply immersed in the tech ecosystem, I'm passionate about exploring and building with generative AI, 
        diving into entrepreneurship challenges, and staying at the cutting edge of technological innovation.`}
      </p>
      <p className="prose prose-neutral dark:prose-invert mb-4">
        {`Whether you're a fellow builder, an AI enthusiast, or just curious about the intersection of technology 
        and entrepreneurship, you'll find detailed insights into my experiments, learnings, and occasional musings. 
        Join me as I document both the breakthroughs and setbacks in building products and understanding emerging technologies.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
