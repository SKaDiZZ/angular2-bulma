import { BuHeroModule } from './bu-hero.module';

describe('BuHeroModule', () => {
  let buHeroModule: BuHeroModule;

  beforeEach(() => {
    buHeroModule = new BuHeroModule();
  });

  it('should create an instance', () => {
    expect(buHeroModule).toBeTruthy();
  });
});
