<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Card,
    BlockTitle,
    List,
    ListItem,
    Link,
    Button,
    touchRipple,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Ripple action">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle withBlock={false}>Example on a card</BlockTitle>
  <div use:touchRipple class="rounded-lg touch-ripple-primary">
    <Card>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illum
      quam incidunt fugit! Voluptatum, harum. Voluptatem dolorem ex debitis
      assumenda sed tempore vitae accusantium dolorum, fugit ea earum aliquid
      placeat, deleniti eligendi ratione molestiae laudantium corrupti eaque
      voluptatum eum iusto cumque obcaecati voluptatibus! Debitis suscipit, ut
      alias non, numquam accusamus dignissimos ipsum accusantium aspernatur
      dolor nemo esse quae officia quasi nostrum qui rerum ad ab assumenda iure
      sed, voluptatibus minima omnis ex. Ex iusto molestiae, error maiores nisi
      totam architecto saepe illum, beatae dicta eligendi explicabo magnam porro
      temporibus unde numquam earum possimus nobis molestias fugit! Eligendi
      dignissimos rerum iste?
    </Card>
  </div>

  <BlockTitle withBlock={false}>With unapplied styles</BlockTitle>
  <div use:touchRipple={false} class="rounded-lg touch-ripple-primary">
    <Card>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illum
      quam incidunt fugit! Voluptatum, harum. Voluptatem dolorem ex debitis
      assumenda sed tempore vitae accusantium dolorum, fugit ea earum aliquid
      placeat, deleniti eligendi ratione molestiae laudantium corrupti eaque
      voluptatum eum iusto cumque obcaecati voluptatibus! Debitis suscipit, ut
      alias non, numquam accusamus dignissimos ipsum accusantium aspernatur
      dolor nemo esse quae officia quasi nostrum qui rerum ad ab assumenda iure
      sed, voluptatibus minima omnis ex. Ex iusto molestiae, error maiores nisi
      totam architecto saepe illum, beatae dicta eligendi explicabo magnam porro
      temporibus unde numquam earum possimus nobis molestias fugit! Eligendi
      dignissimos rerum iste?
    </Card>
  </div>
</Page>

<style>
  :global(.k-touch-ripple-wave) {
    z-index: 10;
  }
</style>
