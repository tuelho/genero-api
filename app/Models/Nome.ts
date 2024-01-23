import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Nome extends BaseModel {

  @column({serializeAs: 'alternativeNames'})
  public alternativeNames: string;

  @column({serializeAs: 'classification'})
  public classification: string;

  @column({serializeAs: 'firstName'})
  public firstName: string;

  @column({serializeAs: 'frequencyFemale'})
  public frequencyFemale: number;

  @column({serializeAs: 'frequencyMale'})
  public frequencyMale: number;

  @column({serializeAs: 'frequencyTotal'})
  public frequencyTotal: number;

  @column({serializeAs: 'frequencyGroup'})
  public frequencyGroup: number;

  @column({serializeAs: 'groupName'})
  public groupName: number;

  @column({serializeAs: 'ratio'})
  public ratio: number;
}
