import initKnex from "knex";
import config from "../knexfile.js";

const knex = initKnex(config.development);

export default knex;
