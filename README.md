This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## KRESKO SET UP

Postgres error

pg_ctl -D /usr/local/var/postgres stop

## ABOUT THIS APP

Kresko is a mobile application developed with React Native for the Frontend and Next.js for the backend.
The app is designed for children/teens coming from a marginalized environment on the age range 10-14, and the aim is to introduce them to mental health topics and therefore grow awareness of their own well being.
The app is meant to be used within the school class, tough is it possible to use it as a single individual.
The main functionality is achieved through a simple action, where the kids are asked to answer the question: "How are you feeling?" by choosing from a range of six different emotions expressed by an image. The data will be stored in the database and retrieved to the teacher, whicch can then show the mood of the class and find space and solutions to improved the general well being.
Users are also provided with a journal in which they can write about their feelings or express them through images.

The app is tought to be as accessible as possible, and further features are under development.

## STARTING A FULLSTACK PROJECT WITH REACT NATIVE (WITH EXPO) AND NEXT.JS

The Frontend and the Backend frameworks needs to be installed into two separated folder as follows:

1. create a new project

cd projects
git clone <project url>
cd <project name>
code .

1.1 IN CASE YOU NEED TO INSTALL ESlint ON THE ROOT:

- yarn create next-react-app .
- DELETE FOLDERS (pages, style...)
- install ESlint --> (see UpLeveled repo about the topic)

2. create a next-api folder and inside the folder create a next.js app
   cd <folder name>
   yarn create next-react-app .
   yarn dev

3. crate a expo-app folder and inside the folder create a expo app
   BEFORE PROCEDING: {
   3.1 INSTALL EXPO IF YOU ALREADY HAVEN'T
   npm install --global expo-cli
   3.2 INSTALL EXPO GO ON YOUR MOBILE DEVICE
   }

expo init <project name> => choose a template

4. run the app
   cd <project name>
   yarn start / expo start

5.

5.1 WORKING WITH EXPO GO
scan your your mobile device the qrcode

5.2 WORKING WITH AN ANDROID EMULATOR (ANDROID STUDIO)

### INSTRUCTIONS FOR THE BACKEND -USING POSTGRES, POSTGRESQL AND REST API

NOTE: One of the main changes for the next months will be to substitute RSET API in favor of GRAPHQL + APOLLO
