import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import React from "react";
import "./index.css";

const Home: React.FC = () => (
	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonTitle>Home</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent fullscreen />
	</IonPage>
);

export default Home;
