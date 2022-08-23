# HelpDesk

<h1 align="center">
    <img alt="helpdesk" src="cover.png" />
</h1>

## 💻 Project

HelpDesk is a real time application to manage infra structure requests.It was built using React Native, Expo (bare flow) and Firestore as backend.
*** This project is based on a lecture (using Firebase as a backend) from Rocketseat, ministered by Rodrigo Gonçalves.

## :hammer_and_wrench: Tools and Architecture 

This project was developed using the following tools:

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- [Firebase](https://firebase.google.com/)

## :gear: How to run 

```
git clone https://github.com/debfdias/HelpDesk
cd HelpDesk
yarn install
yarn android
```

** Create a Firebase project and place the google-services.json inside your android/app folder.

## :gear: Configure Firestore 

Go to android folder, open build.gradle file and add:
```

apply plugin: "com.google.gms.google-services"

```

Now go to android/app folder, open again a build.gradle file and add after "dependencies":
```

classpath("com.google.gms:google-services:4.3.10")

```

Run the application in your simulator.

** Don't forget to install JDK.
<br>
** Add the JDK env in your system's path. Or create a local.properties file inside android the folder and write your sdk path:

```
sdk.dir = /Users/YOUR_USER/Library/Android/sdk
```
## 📝 License

Under MIT license.


