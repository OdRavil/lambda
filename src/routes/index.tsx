import React from "react";
import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import Tabs from "./Tabs";
import Login from "../pages/Login";
import MudarSenha from "../pages/Configuracao/MudarSenha";
import PrimeiroAcesso from "../pages/PrimeiroAcesso";
import PrivateRoute from "./PrivateRoute";
import ListagemAlunos from "../pages/ListagemAlunos";
import Anamnese from "../pages/Anamnese";
import CadastroAluno from "../pages/CadastroAluno";
import TelaAluno from "../pages/TelaAluno";
import CadastroUsuario from "../pages/CadastroUsuario";
import CadastroEscola from "../pages/CadastroEscola";
import CadastroTurma from "../pages/CadastroTurma";

const Router: React.FC = () => (
	<IonReactRouter>
		<IonSplitPane contentId="main">
			<IonRouterOutlet id="main">
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
				<Route path="/login" component={Login} />
				<Route path="/primeiro-acesso" component={PrimeiroAcesso} />
				<PrivateRoute path="/anamnese" component={Anamnese} />
				<PrivateRoute path="/mudar-senha" component={MudarSenha} />
				<PrivateRoute path="/private" component={Tabs} />

				<PrivateRoute path="/aluno/cadastrar" component={CadastroAluno} />
				<PrivateRoute path="/aluno/listar" component={ListagemAlunos} />
				<PrivateRoute path="/aluno/visualizar/:idAluno" component={TelaAluno} />

				<PrivateRoute path="/usuario/cadastrar" component={CadastroUsuario} />

				<PrivateRoute path="/escola/cadastrar" component={CadastroEscola} />

				<PrivateRoute path="/turma/cadastrar" component={CadastroTurma} />
			</IonRouterOutlet>
		</IonSplitPane>
	</IonReactRouter>
);

export default Router;
