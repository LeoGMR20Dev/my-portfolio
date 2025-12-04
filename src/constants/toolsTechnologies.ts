import { ITechItem } from "src/types/techItems.interface";
import ReactSvg from "@assets/svgs/react.svg?react";
import HtmlSvg from "@assets/svgs/html.svg?react";
import CssSvg from "@assets/svgs/css.svg?react";
import JsSvg from "@assets/svgs/javascript.svg?react";
import TsSvg from "@assets/svgs/typescript.svg?react";
import AspNetCoreSvg from "@assets/svgs/net_core.svg?react";
import NodeSvg from "@assets/svgs/node.svg?react";
import AngularSvg from "@assets/svgs/angular.svg?react";
import DockerSvg from "@assets/svgs/docker.svg?react";
import PostgreSqlSvg from "@assets/svgs/postgresql.svg?react";
import SqlServerSvg from "@assets/svgs/sql_server.svg?react";
import VscodeSvg from "@assets/svgs/vscode.svg?react";
import TailwindSvg from "@assets/svgs/tailwind.svg?react";
import MongoSvg from "@assets/svgs/mongo.svg?react";
import NpmSvg from "@assets/svgs/npm.svg?react";
import ExpressJsSvg from "@assets/svgs/expressjs.svg?react";
import GitSvg from "@assets/svgs/git.svg?react";
import GitHubSvg from "@assets/svgs/github-white.svg?react";
import PostmanSvg from "@assets/svgs/postman.svg?react";

export const FRONTEND_ITEMS: ITechItem[] = [
  {
    name: "HTML",
    image: HtmlSvg,
  },
  {
    name: "CSS",
    image: CssSvg,
  },
  {
    name: "JavaScript",
    image: JsSvg,
  },
  {
    name: "TypeScript",
    image: TsSvg,
  },
  {
    name: "Tailwind",
    image: TailwindSvg,
  },
  {
    name: "React",
    image: ReactSvg,
  },
];

export const BACKEND_ITEMS: ITechItem[] = [
  {
    name: "ASP.NET Core",
    image: AspNetCoreSvg,
  },
  {
    name: "NodeJS",
    image: NodeSvg,
  },
  {
    name: "ExpressJS",
    image: ExpressJsSvg,
  },
  {
    name: "Sql Server",
    image: SqlServerSvg,
  },
  {
    name: "PostgreSQL",
    image: PostgreSqlSvg,
  },
  {
    name: "MongoDB",
    image: MongoSvg,
  },
];

export const OTHER_TOOLS_ITEMS: ITechItem[] = [
  {
    name: "Git",
    image: GitSvg,
  },
  {
    name: "GitHub",
    image: GitHubSvg,
  },
  {
    name: "VSCode",
    image: VscodeSvg,
  },
  {
    name: "npm",
    image: NpmSvg,
  },
  {
    name: "Postman",
    image: PostmanSvg,
  },
];

export const LEARNING_ITEMS: ITechItem[] = [
  {
    name: "Angular",
    image: AngularSvg,
  },
  {
    name: "Docker",
    image: DockerSvg,
  },
];
