# personal_site_react
A simple personal website implemented in React. Although a static website does not necessarily need to use React, I chose to use it here so that I could eaily create reusable components for pages, sections, and subsections.

[View the live site here](https://www.hollylovejoy.me/)

![screencapture-hollylovejoy-me-2022-09-26-10_58_02](https://user-images.githubusercontent.com/42592575/192310966-b47401cc-5a9d-4988-9128-d18525cf0a2c.png)

#### Layouts
In src/layouts you will find four reusable sections that I use throughout the site to create consistently styled yet flexible pages for each project. 
#### Editing and Adding Content
I can easily edit page content without modifying any component code by editing the files in src/page-content. These files declare objects that are used as props for layout components that make up a page. 
#### Combining Layouts and Content into Pages
The files in src/pages declare page components that simply house all child layout components that make up the page. 
The page components is also where I handle the issue of using a light or dark NavBar. Props are passed into each page component that specify the color theme of the NavBar. 
#### Future Goals
This project is something that I do in my free time to showcase my design work. It started out in 2019 as a pure HTML and CSS website with a little of JavaScript sprinkled in to make it run smoother. In the future, I plan on improving performance. Some of the images are slow to load and I don't have any loading animations or nice-looking placeholders while content loads. I can also decrease some file sizes to cut down on loading time.  It would also be fun to incorporate smoother transitions and some nice animations throughout the site for a more enjoyable experience.


