import { BuCardModule } from './bu-card.module';

describe('BuCardModule', () => {
  let buCardModule: BuCardModule;

  beforeEach(() => {
    buCardModule = new BuCardModule();
  });

  it('should create an instance', () => {
    expect(buCardModule).toBeTruthy();
  });
});
