<template>
  <div class="rpl-site-footer">
    <div class="rpl-site-footer__main">
      <rpl-footer-navigation :nav="nav"></rpl-footer-navigation>
      <rpl-acknowledgement :text="acknowledgement" />
    </div>
    <div class="rpl-site-footer__bottom">
      <div class="rpl-site-footer__bottom-main">
        <rpl-links-and-copyright :links="links" :copyright="copyright"></rpl-links-and-copyright>
      </div>
      <div class="rpl-site-footer__logo">
        <rpl-link :href="logoLink">
          <img :src="logoUrl" :alt="logoAlt" />
        </rpl-link>
      </div>
    </div>
  </div>
</template>

<script>
import RplAcknowledgement from './Acknowledgement'
import RplLinksAndCopyright from './LinksAndCopyright'
import RplFooterNavigation from './FooterNavigation'
import RplLink from '@dpc-sdp/ripple-link'

// The footer logo is hardcoded because they are not required to be configurable.
import vicLogo from '@dpc-sdp/ripple-global/assets/images/vic-logo.svg'
const vicLogoAlt = 'Victoria Government Website'
const vicLogoLink = 'https://vic.gov.au'

export default {
  components: {
    RplAcknowledgement,
    RplLinksAndCopyright,
    RplFooterNavigation,
    RplLink
  },
  props: {
    nav: Array,
    links: Array,
    copyright: String,
    acknowledgement: String
  },
  data () {
    return {
      logoAlt: vicLogoAlt,
      logoUrl: vicLogo,
      logoLink: vicLogoLink
    }
  }
}
</script>

<style lang="scss">
@import "~@dpc-sdp/ripple-global/style";

$rpl-footer-breakpoint: 'l' !default;
$rpl-footer-bg-color: rpl-color('dark_primary') !default;
$rpl-footer-bg-image: url('./assets/images/footer-shape.png') !default;
$rpl-footer-bottom-bg-color: transparent !default;
$rpl-footer-text-color: rpl-color('white') !default;
$rpl-footer-border-width: $rpl-border-width !default;
$rpl-footer-border-color: rpl-color('primary') !default;
$rpl-footer-border-color-light: rpl-color('white') !default;
$gutterless-grid: (
  columns: 12,
  gutter: 0
);

.rpl-site-footer {
  @include rpl_grid_container;
  @include rpl_body;
  @include rpl_typography('copy_extra_small');
  background-color: $rpl-footer-bg-color;
  color: $rpl-footer-text-color;

  @include rpl_breakpoint($rpl-footer-breakpoint) {
    background-image: $rpl-footer-bg-image;
    background-position: calc(100% + #{rem(600px)}) bottom;
    background-repeat: no-repeat;
    background-size: rem(880px);
  }

  @include rpl_breakpoint(xl) {
    background-position: calc(100% + #{rem(440px)}) bottom;
  }

  @include rpl_breakpoint(xxxl) {
    background-position: calc(100% + #{rem(100px)}) bottom;
  }

  a {
    color: $rpl-footer-text-color;
  }

  ul {
    padding: 0;
    list-style: none;
  }
}

.rpl-site-footer__main,
{
  @include rpl_mobile_padding;
  @include rpl_site_constrain;
  border-bottom: $rpl-footer-border-width solid $rpl-footer-border-color;
  padding-top: $rpl-space;

  @include rpl_breakpoint($rpl-footer-breakpoint) {
    padding-top: $rpl-space-4 * 2;
    padding-bottom: $rpl-space-4 * 2;
  }
}

.rpl-site-footer__bottom {
  @include rpl_mobile_padding;
  @include rpl_site_constrain;
  @include rpl_breakpoint($rpl-footer-breakpoint) {
    @include rpl_grid_row($gutterless-grid);
  }
  background-color: $rpl-footer-bottom-bg-color;
  padding-top: $rpl-space-3;
  padding-bottom: $rpl-space-4;

  & .rpl-site-footer__bottom-main {
    @include rpl_breakpoint($rpl-footer-breakpoint) {
      @include rpl_grid_column(10, $gutterless-grid);
    }
  }
}

.rpl-footer-nav {
  $root: &;

  @include rpl_breakpoint_down('l') {
    height: auto !important;
  }

  &__menu-item {
    border-bottom: $rpl-footer-border-width solid $rpl-footer-border-color;

    &:last-child {
      border-bottom: 0;
    }

    @include rpl_breakpoint($rpl-footer-breakpoint) {
      border-bottom: 0;
    }
  }

  &__heading {
    @include rpl_typography('heading_xs');

    .rpl-icon {
      float: right;
      height: 1rem !important;
    }

    #{$root}__menu-item--parent & {
      cursor: pointer;

      @include rpl_breakpoint($rpl-footer-breakpoint) {
        cursor: none;
      }
    }
  }

  &__submenu-item {
    li {
      display: block;
      margin-bottom: $rpl-space-4;
    }

    a {
      @include rpl_typography('body_small');
    }

    @include rpl_breakpoint($rpl-footer-breakpoint) {
      display: block;
    }
  }
}

.rpl-links-and-copyright__links {
  margin: 0;

  li {
    display: inline-block;
    border-left: $rpl-footer-border-width solid $rpl-footer-border-color-light;
    padding: 0 $rpl-space-3;
    margin-top: 0;
    margin-bottom: $rpl-space-2;

    &:first-child {
      border-left: 0;
      padding-left: 0;
    }
  }
}

.rpl-links-and-copyright__copyright {
  margin: 0 0 $rpl-space-4;
  p {
    margin-top: 0
  }
  @include rpl_breakpoint($rpl-footer-breakpoint) {
    margin-bottom: $rpl-space-2;
  }
}

.rpl-site-footer__logo {
  @include rpl_breakpoint($rpl-footer-breakpoint) {
    @include rpl_grid_column(2, $gutterless-grid);
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
