import { BuNotificationModule } from './bu-notification.module';

describe('BuNotificationModule', () => {
  let buNotificationModule: BuNotificationModule;

  beforeEach(() => {
    buNotificationModule = new BuNotificationModule();
  });

  it('should create an instance', () => {
    expect(buNotificationModule).toBeTruthy();
  });
});
