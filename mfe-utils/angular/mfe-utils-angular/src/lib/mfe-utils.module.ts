import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { loadBundle } from '@codeblaze/mfe-utils-core';
import { MfeUtilsConfig } from './mfe-utils.config';

// @dynamic
@NgModule()
export class MfeUtilsModule {

  public static forRoot(config: MfeUtilsConfig) : ModuleWithProviders<MfeUtilsModule> {
    return {
      ngModule: MfeUtilsModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: async () => {
            config.bundles.forEach(
              async (bundle) => await loadBundle(bundle.url, bundle.cache)
            );
            console.log(`${config.bundles.length} bundles loaded`);
          }
        }
      ]
    };
  }

}
