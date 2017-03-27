import { Prop, ExtendAction, ExecuteContext, Identity, Exclude } from '@tdm/core';
import { RestMixin, HttpResource, UrlParam, HttpActionOptions, HttpActionMethodType } from '@tdm/angular-http';

import { packageMapper } from '../mapper';

@HttpResource({
  endpoint: 'https://api.npms.io/v2/package/:name',
  noBuild: true,
  mapper: packageMapper
})
@Exclude()
export class Package {

  @Identity()
  @UrlParam()
  @Exclude({ from: 'outgoing' })
  name: string;

  @Prop()
  analyzedAt: string;

  @Prop()
  collected: {
    metadata: {
      name: string;
      version: string;
      description: string;
      keywords: string[];
      date: string;
      publisher: {
        username: string;
        email: string;
      },
      maintainers: Array<{ username: string; email: string; }>;
      repository: {
        type: string;
        url: string;
      },
      links: {
        npm: string;
        homepage: string;
        repository: string;
        bugs: string;
      },
      license: string;
      dependencies: { [pkg: string]: string };
      releases: Array<{
        from: string;
        to: string;
        count: number;
      }>;
      hasSelectiveFiles: boolean;
      readme: string;
    },

    npm: Array<{
      downloads: {
        from: string;
        to: string;
        count: number;
      }
    }>,

    github: {
      homepage: string;
      starsCount: number;
      forksCount: number;
      subscribersCount: number;
      issues: {
        count: number;
        openCount: number;
        distribution: { [index: string]: number }
        isDisabled: boolean;
      },
      contributors: Array<{ username: string; commitsCount: number; }>;
      statuses: Array<{ context: string; state: string; }>;
    },

    source: {
      files: {
        readmeSize: number;
        testsSize: number;
      },
      repositorySize: number;
      coverage: number;
      outdatedDependencies: {
        [pkg: string]: {
          required: string;
          stable: string;
          latest: string;
        }
      }
    }
  };

  @Prop()
  evaluation: {
    quality: {
      carefulness: number;
      tests: number;
      health: number;
      branding: number;
    },
    popularity: {
      communityInterest: number;
      downloadsCount: number;
      downloadsAcceleration: number;
      dependentsCount: number;
    },
    maintenance: {
      releasesFrequency: number;
      commitsFrequency: number;
      openIssues: number;
      issuesDistribution: number;
    }
  };

  @Prop()
  score: {
    final: number;
    detail: {
      quality: number;
      popularity: number;
      maintenance: number;
    }
  };

  @ExtendAction({
    method: HttpActionMethodType.Post,
    pre: (ctx: ExecuteContext<any>, packages: string | string[], options?: HttpActionOptions) => {
      if (packages && typeof packages === 'string') {
        ctx.body = [packages];
      } else if (Array.isArray(packages)) {
        ctx.body = packages.filter( p => !!p);
      } else {
        throw new Error('Invalid parameters supplied');
      }

      if (packages.length === 0) {
        throw new Error('Empty search');
      }

      if (!options) {
        options = {};
      }
      options.urlParams = Object.assign(options.urlParams || {}, { name: 'mget' });
      return options;
    }
  })
  static query: (packages: string | string[], options?: HttpActionOptions) => RestMixin<Package>;
}
