My first job as a software engineer out of college was for OCLC, a library services non-profit. I could hardly believe it. I was getting paid \$60K per year to write code. It was a dream, I was getting paid to solve puzzles. And I loved solving puzzles. I was so fast at it\! And coding felt like magic – I’d solve puzzles and then others could use it.

It was also my introduction to Agile. I’d only learned about waterfall in school. An endless amount of work, in priority order. All the puzzles I could handle, all I had to do was pull them off the board. I threw myself at the board, because I wanted to show I was as valuable as possible. I was there to learn as much as possible, solve puzzles, and ship code.

I prided myself on shipping features as fast as I could. My product manager loved me because she could count on me to always show her ideas and get them in as they came up. Life was grand and I was planning my rise up the engineering ladder as fast as I could.

I got my first promotion within a year. I was able to show that I was learning and closing tickets. Early performance feedback was great. I was crushing it and getting faster and faster and faster.

So imagine my surprise during a performance review where I was told that other engineers were complaining that I was getting 2x as many PR comments.

Of course I was, I was shipping 2x as many tickets. This was the first time I was surprised by feedback in my career. I didn’t understand it at all.

My logic was sound: if I could get 90% of the way in 10% of the time and someone in the company could review it and give me that last 10%, why wouldn’t I use that system as much as I could?

All the learning I was doing was compounding and would benefit the company even more in the future. The more I learned, the faster I could solve puzzles. The more puzzles I could solve, the more value I could provide to the company in my 8 hours each day. The more magic I could perform. That’s the way to advance your career, right?

Over the next couple of years, I learned about the power of CI/CD. Any failure I could catch myself creating, I could start protecting against. I wasn’t reliable, I would make the same mistakes over and over and over again because I was focused on the main problem I was solving, I didn’t really care about the little details. I wanted to learn the abstractions so I could move them around faster. The details I didn’t want to worry about I could let the build handle.

The project gained a shield from my speed. I could ship more features, with fewer comments. Systems could start working together and relying on each other. Others could rely on my code to be thoroughly checked against the contracts we agreed to as a team. 

The test failures became my feedback mechanism. I quickly realized how powerful that could be. I could write as much code as I wanted, as fast as I wanted, as long as I kept it local. Going to production was the expensive part. The puzzles I solved now used test-driven solutions and build/deploy pipelines.

Fast forward a couple of years. Now I’m making \$100k/year working as an engineer for Cardinal Health, processing healthcare data. And I learned about integrating systems that evolve at different speeds and for downstream users.

We were running the data lake for the company, making sure data was coming in from different providers, including one that was a device that lived in pharmacies.

One of the data failures was someone on prem unplugging the device and throwing it away.

That’s not a problem you can solve with code. Only observability of what’s there vs. what’s expected.

You could manage infinite amounts of data if you knew where you expected it to come from. Code is a contract with reality.

The code you write is based on your ability to see the reality you are processing. If you build a duck processor, everything is a duck waiting to be processed. So when someone throws a wrench in, it doesn’t duck. It blows up\!

As engineers, we have the perfect primitive though: the API. The API is a specific type of contract, one that gives two systems the ability to communicate. And importantly, it allows both sides of the contract to evolve at independent rates.

When someone throws a wrench at your duck API, it doesn’t blow up. It simply returns  **HTTP 422: Unprocessable Duck.**

As the systems got more complex, so did the coordination costs, and so did our work on sharing that complexity. Beyond just test-driven development, we now moved on to pair programming. I thought I would hate this because I was worried it would slow me down. I liked to solve the puzzles in my head and then translate those solutions to code. It’s what I had learned how to do throughout my career. And then I interviewed with a pair programming exercise and I realized how valuable it could be. It was the same thing I was trying to get out of pull requests initially \- feedback on my ideas from other engineers who could see details that were harder for me to notice. 

Looking back on it, I think it was the best thing that ever happened to me. I could have a human with me to help me see the things I couldn’t see. It was amazing how differently we would look at a given problem, but in the end, we were able to work together and create a solution that was better than either of us would produce alone. We’d discuss a problem a ton, and write code at the end. Instead of an async code review process, the review mostly happened before the code was written.

Code was filtered through a shared understanding of reality and our contract we were trying to fulfill with it. We had a higher level understanding of the problem because we didn’t have to hold it ourselves. 

We shared the problem with each other. The solutions emerged through our communication about the problem.

Fast forward a few more years. 

The pandemic hit and so did my understanding of my job. I went remote, and I realized how much the coordination work had been wearing on me. I wanted to move faster and I saw how much value I was creating for the company. I felt like I was running out of time and saw a startup called [Copy.ai](http://Copy.ai) building in public on Twitter. They were growing an insane amount and it looked so easy.

So I quit my job at Cardinal Health and decided to launch a startup. And realized how much of a startup has nothing to do with code at all. Instead, I found myself learning how to tell stories, how to communicate, how to coordinate. And I was terrible at all of it.

I knew how to write code. I had an idea in my head about how information would start moving in the future. I saw the birth of LLMs and how data was being used to train models inside of Cardinal, and I knew there was something like a human API coming down the line. I could see it, but I didn’t know how to actually make it something anyone would pay for. I knew I could create it given a team of engineers who could work with me, so I simply had to raise money on my idea. Everyone was doing it, so it must be easy. 

 I spent about seven months failing until shutting it down and going back to the drawing board. There wasn’t any money available for me to pull a team together, at least that I could find. And for as much as I had built, I’d made a few hundred dollars in revenue. I had the vision. I had no idea how to make anyone actually care about it. The closest I got was when I was a finalist in a pitch competition and had a chance to pitch Tim Draper on my idea and totally blew the opportunity.

I could write all the code in the world and none of it would matter if I couldn’t get anyone to care. And I realized that I cared way more than anyone else. I just didn’t know how to get that to translate to others.

Then I found myself with an opportunity to work for [Copy.ai](http://Copy.ai). And for the first time in my life, I was the slow one. A month after being hired, I was in San Francisco for a chance to work with the team. And I was failing at shipping small features. I remember working with one of the engineers who was already there and I felt like I was completely outclassed. Everything was hard for the first time in a long time. I had new technology in front of me that I had to learn, moving in faster ways, and none of the guardrails I was used to relying on. 

I had to learn that it was ok to make a mistake. One thing I credit the CEO for: he made it very clear that shipping fast was the priority and things might break. Err on the side of speed, not safety. That was hard to adapt to, because I was so used to being in teams that didn’t share that philosophy at all.

I was also too enamored with the entire market forming. I got to see inside of the growth curve watching us experiment at scale. And I was trying to solve puzzles in code but those didn’t matter.   

We had customers that had needs, and every single thing we were doing was focused on making those customers successful. I still had puzzles I was trying to solve. It created a tension in me that I didn’t notice at the time. Because it felt great. I was going to company offsites in places like San Francisco, Miami, and Austin. We were winning the game. But I never felt like I was moving as fast as I should have been. Other engineers were outperforming me. I knew I was holding the team back because things were taking me longer than they should have. 

I didn’t want to ship the small scale any more. I wanted to be asking higher level questions. I wanted to be working on higher level puzzles because I wasn’t interested in the customers as much as I was the puzzles I saw in front of me. I saw so many new problems that were appearing around me in the world, and I felt like everything was speeding up and I couldn’t keep up with them.

And then they fired me, and I suddenly had all the time to solve puzzles I wanted. I was amazed at how much of a weight lifted from my shoulders when that happened. For once in my life, I wasn’t that interested in going as fast in a single direction. I wanted to start exploring more. So many new things were becoming possible and I could do more and more with each model that was released.  

I continued to build and experiment. Pushing the models to the limits of their abilities and my understanding.

And last summer, I had a breakthrough, I realized something. The AI was faster than me at writing code. If I knew what I wanted to write, there was no sense in me writing the code. That meant all I had to do was ask the right questions and start connecting the dots. We could start solving A LOT of puzzles together. Anything I didn’t know, I could find out with the help of AI, but I had to ensure I built systems that forced contact with reality. None of the information coming out of the AI could be counted on to be real, but I could hook those models into systems that could be counted on to be real. And everything else was simply a matter of routing information between different systems.

I started building my business, Idea Nexus Ventures, into an experiment factory \- every day launching as many experiments as I could. My goal is to learn how people are adapting to AI as it develops, so I’m constantly testing ideas with people and seeing how they use them. How much do they trust them? How much do they attempt to accomplish with them?

Because that helped me figure out where the models were lacking, and I was able to engineer systems that supported them. I could test ideas with the market, get some feedback and ship a completely different product an hour later. When you can move that fast when you are talking with someone, you can learn so much more about the world. Every puzzle you solve shows you new types of puzzles that you can solve.  And you can create systems that are able to coordinate at a much deeper level of reality. When you have the ability to solve puzzles so cheaply that you can do it on the fly, you’re able to combine those solutions into new constructions. We have new magic we can provide to those around us. Almost all of the engineering work is about learning reality and how to represent it in a way that provides insight to someone else. We perform magic by transforming information into something that they can use in order to accomplish their jobs better, faster, and more reliably.

When I was at OCLC, I had to learn how to represent libraries, their catalogs, and their systems in ways that allowed everyone to actually find things. We focused a lot on how users searched for things, how that information was displayed to them, and how information connected.

When I got to Cardinal Health, the world I had to represent changed. Now I was in the world of patients and drugs and pharmacies. I had to understand how hospitals and insurance companies shared information and how to keep patient data safe while doing so. And when I got to [Copy.ai](http://Copy.ai), I found a rapidly changing reality that was evolving at the speed of the market. And when we didn’t solve the right problems, we lost customers. That lost us revenue.

The types of problems I solved changed and the speed changed. But we never ran out, because we always focused on the flow of information. The more we did, the more work we had to do. All information kept going through a flow. A transformation: some work was done. And an evaluation: how well did it get done?

Most of the work I do, I throw away now. Projects last as long as I feel like needing them. And it’s simple to pick up where I left off.

Anything I’ve built, I can build again faster, better and cheaper. The first build of something is never the best one. It’s a matter of iterations until you have working systems, and then it’s a matter of layering on systems and observability.

Production updates are the expensive branch. Those updates impact real users who have expectations of system behavior. So I can’t update at full speeds for most audiences. I have to have gates that prevent everything from reaching working systems.

Outside of those, I’m able to run tiny experiments, working with entrepreneurs and teams to explore possible futures. Imagine how many more possible solutions we are able to explore now.

And these possible futures will be pruned down to the best one for the actual users of the system.

We’ve already been using APIs to build systems that feel magical. But as engineers, we’ve been used to the ones who were doing a lot of the magic, because we knew how to solve the puzzles.

Now that AI can solve puzzles better than we can, there’s uncertainty around the future of the profession. If anyone can build anything on their own, why would engineers be needed?

Because our jobs were never about writing code or solving puzzles. Our job as engineers was to understand the constraints of the system and route “magic” in predictable controllable ways so others can layer human systems on top that provide increasing amounts of value for the world. As the level of complexity we can handle increases, the more magic we’re able to provide to end users.

That means that we’re about to see an explosion of what becomes possible. Because others will be able to create all sorts of systems that can extract information in interesting ways. That information will be transformed, and loaded into a downstream system. The data flows will get bigger, the models will improve, and there will be more magic available for us than ever before.

Now I spend more and more of my time focused on the next generation of engineers. Learning how to teach the things I’ve learned in a world that was moving a bit slower and teaching the next generation of superstars the power of slowing down a bit and learning how to see the magic in systems and coordination when it comes to changing reality.

When I teach others to see how things fit together, this creates a new range of possibilities because they are able to start building their own systems. Those systems don’t have to change at the same rate. Some can change quickly, some can change slowly, but everyone will have the ability to create systems that enable others to gain access to their magic.

They’ll be able to start offering their magic via API, and that will allow us to build magical architectures for non-engineers to use and rely on, and start learning how to direct magic themselves.

When everyone has access to the magic that we’ve been able to see as engineers, more of the world becomes engineered to feel magical.

As it turns out, the way to advance your career isn’t to solve more puzzles. It’s to create systems that don’t make people solve those puzzles at all. It’s to create systems that allow people to coordinate together in better ways, with less friction, and with more magic. The most important code is the code that isn’t written because each line of code is a contract with reality. The fewer contracts we have to worry about ourselves, the more reality we get to experience.  

And that’s the future I can’t wait to see. 

