import { KaroStatusModule } from './karo-status.module';

describe('KaroStatusModule', () => {
  let karoStatusModule: KaroStatusModule;

  beforeEach(() => {
    karoStatusModule = new KaroStatusModule();
  });

  it('should create an instance', () => {
    expect(karoStatusModule).toBeTruthy();
  });
});
