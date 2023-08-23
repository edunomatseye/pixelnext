import { modulesSharedTrpc } from './trpc';

describe('modulesSharedTrpc', () => {
  it('should work', () => {
    expect(modulesSharedTrpc()).toEqual('modules-shared-trpc');
  });
});
