<script setup></script>

<template>
  <nav>
    <RouterLink to="/" class="nav__link">
      <v-icon name="fa-tachometer-alt" scale="1" />
      My Client
    </RouterLink>
    <RouterLink to="/bbbb" class="nav__link"
      ><v-icon name="fa-tachometer-alt" scale="1" /> Create Task
    </RouterLink>
    <!-- 展開 -->
    <div class="nav__group">
      <!-- id要是為一值 -->
      <input type="checkbox" id="navGroupToggle1" />
      <!-- for要跟id一樣 -->
      <label for="navGroupToggle1" class="nav__groupTitle">
        <div class="nav__icon">
          <v-icon name="ri-user-settings-fill" />
        </div>
        <div class="nav__linkName">
          <h3>Admin</h3>
        </div>
        <div class="nav__down">
          <v-icon name="md-keyboardarrowdown-round" scale="1" />
        </div>
      </label>
      <div class="nav__linkWrap">
        <div>
          <div class="nav__link">
            <RouterLink to="/admin1">
              <div class="nav__icon">
                <v-icon name="fa-tachometer-alt" scale="1" />
              </div>
              <div class="nav__linkName">Member Setting</div>
            </RouterLink>
          </div>
          <div class="nav__link">
            <RouterLink to="/admin2">
              <div class="nav__icon">
                <v-icon name="fa-tachometer-alt" scale="1" />
              </div>
              <div class="nav__linkName">Member Setting2</div>
            </RouterLink>
          </div>
          <div class="nav__link">
            <RouterLink to="/admin3">
              <div class="nav__icon">
                <v-icon name="fa-tachometer-alt" scale="1" />
              </div>
              <div class="nav__linkName">Member Setting3</div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="nav__group">
      <input type="checkbox" id="navGroupToggle2" />
      <label for="navGroupToggle2" class="nav__groupTitle">
        <div class="nav__icon">
          <v-icon name="ri-user-settings-fill" />
        </div>
        <div class="nav__linkName">
          <h3>AdminZZZZZZZZZZZZZZZZZZ</h3>
        </div>
        <div class="nav__down">
          <v-icon name="md-keyboardarrowdown-round" scale="1" />
        </div>
      </label>
      <div class="nav__linkWrap">
        <div>
          <div class="nav__link">
            <RouterLink to="/admin4">
              <div class="nav__icon">
                <v-icon name="fa-tachometer-alt" scale="1" />
              </div>
              <div class="nav__linkName">Member Setting44444444444444</div>
            </RouterLink>
          </div>
          <div class="nav__link">
            <RouterLink to="/admin5">
              <div class="nav__icon">
                <v-icon name="fa-tachometer-alt" scale="1" />
              </div>
              <div class="nav__linkName">Member Setting5</div>
            </RouterLink>
          </div>
          <div class="nav__link">
            <RouterLink to="/admin6">
              <div class="nav__icon">
                <v-icon name="fa-tachometer-alt" scale="1" />
              </div>
              <div class="nav__linkName">Member Setting6</div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="nav__group">
      <input type="checkbox" id="navGroupToggle3" />
      <label for="navGroupToggle3" class="nav__groupTitle">
        <div class="nav__icon">
          <v-icon name="ri-user-settings-fill" />
        </div>
        <div class="nav__linkName">
          <h3>AdminZZZZZZZZZZZZZZZZZZ</h3>
        </div>
        <div class="nav__down">
          <v-icon name="md-keyboardarrowdown-round" scale="1" />
        </div>
      </label>
      <div class="nav__linkWrap">
        <div>
          <div class="nav__link">
            <RouterLink to="/admin4">
              <div class="nav__icon">
                <v-icon name="fa-tachometer-alt" scale="1" />
              </div>
              <div class="nav__linkName">Member Setting44444444444444</div>
            </RouterLink>
          </div>
          <div class="nav__link">
            <RouterLink to="/admin5">
              <div class="nav__icon">
                <v-icon name="fa-tachometer-alt" scale="1" />
              </div>
              <div class="nav__linkName">Member Setting5</div>
            </RouterLink>
          </div>
          <div class="nav__link">
            <RouterLink to="/admin6">
              <div class="nav__icon">
                <v-icon name="fa-tachometer-alt" scale="1" />
              </div>
              <div class="nav__linkName">Member Setting6</div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: #000;
  width: 13rem;
  height: 100dvh;
  position: fixed;
  /* header高 */
  padding-top: 4rem;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
  z-index: 998;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  > .nav__link {
    display: block;
    text-decoration: none;
    font-weight: 700;
    color: #ccc;
    font-size: 0.875rem;
    padding: 1rem;
    border-left: 3px solid transparent;
    overflow: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;

    &:hover:not(.router-link-active) {
      background-color: #333;
      background-image: linear-gradient(#0000006a, #0000006a);
    }

    /* 現在位置 */
    &.router-link-active {
      background-color: #333;
      background-image: linear-gradient(#0000003c, #0000003c);
      color: #fff;
      border-left: 3px solid var(--color-deloitte);
    }
  }

  .nav__group {
    border-top: 2px solid transparent;

    &:hover {
      background-color: #333;
      background-image: linear-gradient(#0000006a, #0000006a);
    }

    &:has(input[type='checkbox']:checked) {
      border-top: 2px solid #000;
      background-color: #333;
      background-image: linear-gradient(#0004, #0004);
    }

    input[type='checkbox'] {
      display: none;

      &:checked ~ .nav__groupTitle {
        color: #fff;

        .nav__down {
          transform: rotate(-180deg);
        }
      }

      &:checked ~ .nav__linkWrap {
        grid-template-rows: 1fr;
      }
    }

    .nav__groupTitle {
      cursor: pointer;
      color: #ccc;
      display: flex;
      align-items: center;
      padding: 1rem;
      border-left: 3px solid transparent;

      .nav__linkName {
        margin-left: 0.375rem;
        overflow: hidden;
        flex: 1 1;

        h3 {
          font-weight: 700;
          font-size: 0.875rem;
          overflow: hidden;
          text-wrap: nowrap;
          text-overflow: ellipsis;
        }
      }

      .nav__down {
        margin-left: auto;
        transition: 0.3s ease-in-out;
        overflow: hidden;
      }
    }

    .nav__linkWrap {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: 0.3s ease-in-out;

      > div {
        min-height: 0;
        width: 100%;
        overflow: hidden;

        .nav__link {
          a {
            display: block;
            text-decoration: none;

            color: #ccc;
            font-size: 0.875rem;
            padding: 1rem;
            border-left: 3px solid transparent;
            display: flex;

            &:hover:not(.router-link-active) {
              background-color: #333;
              background-image: linear-gradient(#0001, #0001);
            }

            &.router-link-active {
              background-color: #333;
              background-image: linear-gradient(#00000000, #00000000);
              color: #fff;
              border-left: 3px solid var(--color-deloitte);
              box-shadow: 0 5px 5px #0000004c;
            }

            .nav__linkName {
              margin-left: 0.375rem;
              font-weight: 700;
              overflow: hidden;
              text-wrap: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
}
</style>
