<script setup></script>

<template>
  <nav>
    <div class="nav__logo">
      <img src="@/assets/images/ic_deloitte_square.png" alt="" />
    </div>
    <div class="navLinks">
      <div class="nav__link">
        <RouterLink to="/"> AAAA </RouterLink>
      </div>
      <div class="nav__link">
        <RouterLink to="/bbbb"> BBBB </RouterLink>
      </div>
      <div class="nav__group">
        <div class="nav__groupTitle">
          <div class="sidebar__linkName">下拉選單 <v-icon name="io-chevron-down-circle" /></div>
          <div class="sidebar__down"></div>
        </div>
        <div class="nav__linkWrap">
          <div>
            <div class="nav__link">
              <RouterLink to="/1">
                <div class="sidebar__linkName">dropdown1</div>
              </RouterLink>
            </div>
            <div class="nav__link">
              <RouterLink to="/2">
                <div class="sidebar__linkName">dropdown2</div>
              </RouterLink>
            </div>
            <div class="nav__link">
              <RouterLink to="/3">
                <div class="sidebar__linkName">dropdown3</div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: var(--color-green5);
  height: 3rem;
  position: sticky;
  top: 4rem;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  padding-left: 10rem;
  z-index: 999;

  .nav__logo {
    height: 100%;
    margin-right: 2rem;
    padding-block: 0.5rem;

    img {
      height: 100%;
    }
  }

  .navLinks {
    height: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 2rem;

    > .nav__link {
      a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 0.25rem;
        font-size: 1rem;

        &:hover:not(.router-link-active) {
          font-weight: 700;
        }
        /* 現在位置 */
        &.router-link-active {
          border-bottom: 2px solid #fff;
          color: #fff;
        }
      }
    }

    .nav__group {
      position: relative;
      height: 100%;

      &:hover {
        .nav__linkWrap {
          grid-template-rows: 1fr;
          box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px 1px;
        }
      }

      .nav__groupTitle {
        cursor: pointer;
        color: #fff;
        padding: 0.25rem;
        display: flex;
        align-items: center;
        height: 100%;

        .sidebar__linkName {
          font-size: 1rem;
        }
      }

      .nav__linkWrap {
        position: absolute;
        display: grid;
        grid-template-rows: 0fr;
        overflow: hidden;
        transition: 0.3s ease-in-out;
        top: 100%;
        background-color: #fdfdfd;
        border-radius: 0px 0px 15px 3px !important;
        min-width: 10rem;
        margin-top: 0.0625rem;

        > div {
          min-height: 0;
          width: 100%;
          overflow: hidden;

          .nav__link {
            &:first-child {
              padding-top: 0.5rem;
            }
            &:last-child {
              padding-bottom: 0.5rem;
            }

            a {
              padding: 0.5rem 1rem;
              color: #000;
              text-decoration: none;
              display: block;
              font-size: 1rem;

              &:hover {
                color: #fff;
                background-color: var(--color-green-primary);
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 800px) {
  nav {
    padding-left: 1rem;
  }
}
</style>
