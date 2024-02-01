import Database from '@ioc:Adonis/Lucid/Database'

export default class NomesController {

  async search({  params , response }) {
    const searchParam = `${decodeURIComponent(params.pesquisa)}`;
    console.log(searchParam)
    try {
      const { rows } = await Database.rawQuery('select case\n' +
        '      when coalesce(sum(frequency_female), 0)  > coalesce(sum(frequency_male), 0) then \'fem\'\n' +
        '      when coalesce(sum(frequency_male), 0) > coalesce(sum(frequency_female), 0)  then \'masc\'\n' +
        '    end\n' +
        `from nomes where nomes.alternative_names ilike '%' || split_part(unaccent('${searchParam}'), ' ', 1) || '%';`)
      if(rows[0]) {
        return response.json(rows[0].case);
      }
      return response.json('indefinido');
    } catch (err) {
      console.error(err.message);
      return response.status(err.status).json({
        error: {
          message: "Não existem!",
          err_message: err.message,
        },
      });
    }

  }


}
