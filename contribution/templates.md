# IMAGE LINKS

# RECOURCE LINKS

# Headings

# Heading level 1	<h1>Heading level 1</h1>	

## Heading level 2	<h2>Heading level 2</h2>	

### Heading level 3	<h3>Heading level 3</h3>	

#### Heading level 4	<h4>Heading level 4</h4>	

##### Heading level 5	<h5>Heading level 5</h5>	

###### Heading level 6	<h6>Heading level 6</h6>	


# Lists

- Nulla et rhoncus turpis. Mauris ultricies elementum leo. Duis efficitur
  accumsan nibh eu mattis. Vivamus tempus velit eros, porttitor placerat nibh
  lacinia sed. Aenean in finibus diam.

    * Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
    * Nam vulputate tincidunt fringilla.
    * Nullam dignissim ultrices urna non auctor.

## Complex ordered lists

1. Vivamus id mi enim. Integer id turpis sapien. Ut condimentum lobortis
  sagittis. Aliquam purus tellus, faucibus eget urna at, iaculis venenatis
  nulla. Vivamus a pharetra leo.

    1. Vivamus venenatis porttitor tortor sit amet rutrum. Pellentesque aliquet
      quam enim, eu volutpat urna rutrum a. Nam vehicula nunc mauris, a
      ultricies libero efficitur sed.

    2. Morbi eget dapibus felis. Vivamus venenatis porttitor tortor sit amet
      rutrum. Pellentesque aliquet quam enim, eu volutpat urna rutrum a.

        1. Mauris dictum mi lacus
        2. Ut sit amet placerat ante
        3. Suspendisse ac eros arcu


## Definition lists

`Lorem ipsum dolor sit amet`
:   Sed sagittis eleifend rutrum. Donec vitae suscipit est. Nullam tempus
    tellus non sem sollicitudin, quis rutrum leo facilisis.

`Cras arcu libero`
:   Aliquam metus eros, pretium sed nulla venenatis, faucibus auctor ex. Proin
    ut eros sed sapien ullamcorper consequat. Nunc ligula ante.

    Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
    Nam vulputate tincidunt fringilla.
    Nullam dignissim ultrices urna non auctor.

## Checklists

- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [x] In scelerisque nibh non dolor mollis congue sed et metus
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque



# Code

``` js
document$.subscribe(function() { // (1)
  var tables = document.querySelectorAll(/* (2) */ "article table")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})
```

## Highlight code lines
``` python hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```



# Admonitions
https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types 

TYPES: quote, cite, example, bug, danger, error. failure, fail, missing, warning, caution, attention, question, help, faq, success, check, done
tip, hint, important, info, todo, note

## NOTE

!!! note "Phasellus posuere in sem ut cursus"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

### Note with code

!!! note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

    ``` python
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```

    Nunc eu odio eleifend, blandit leo a, volutpat sapien. Phasellus posuere in
    sem ut cursus. Nullam sit amet tincidunt ipsum, sit amet elementum turpis.
    Etiam ipsum quam, mattis in purus vitae, lacinia fermentum enim.


!!! Adding a + after ??? will render the block as open on page load:

## alignment 

!!! info inline
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nulla et euismod nulla.
    Curabitur feugiat, tortor non consequat
    finibus, justo purus auctor massa, nec
    semper lorem quam in massa.

possible variations: inline, inline end


# TABLES

| Method      | Description                          |
| ----------- | ------------------------------------ |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |

## Alingmnet

| :---------- | :----------------------------------- |    - LEFT
| :---------: | :-----------------------------------: |   - CENTER
| ---------: | -----------------------------------: |     - RIGHT


# Images

![Placeholder](https://dummyimage.com/600x400/eee/aaa){ align=left }

OR HTML

<figure>
  <img src="https://dummyimage.com/600x400/eee/aaa" width="300" />
  <figcaption>Image caption</figcaption>
</figure>

# Abbreviations 
https://squidfunk.github.io/mkdocs-material/reference/abbreviations/#snippets 

# FORMATING

https://squidfunk.github.io/mkdocs-material/reference/formatting/#smartsymbols

# CONTENT TABS
https://squidfunk.github.io/mkdocs-material/reference/content-tabs/#linking-content-tabs

## CODE

=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```

## LISTS

=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci


# BUTTONS

[Subscribe to our mailing list](#){ .md-button .md-button--primary }
[Submit :fontawesome-solid-paper-plane:](#){ .md-button .md-button--primary }


# Footnotes

https://squidfunk.github.io/mkdocs-material/reference/footnotes/#adding-footnote-references

Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.[^2]
[^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.


For video :
````
<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019893159-Cognigy-Sessions-Endpoint-Transformers" target="_blank" >Technical video "Endpoint Transformers"</a>
      </div>
      <div class="callout-subtext">
      Watch this Episode of Cognigy Sessions for a technical deep dive
      </div>
   </div>
</blockquote>
````


For github links:
````
<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="60" height="60"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://github.com/Cognigy/Transformers" target="_blank" >Cognigy/Transformers</a>
      </div>
      <div class="callout-subtext">
            Reference to Cognigy repository on GitHub
      </div>
   </div>
</blockquote>
````

Helcenter articles:

````
<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">📘</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019704899-Transformers-Overview" target="_blank" >Transformers Overview</a>
      </div>
      <div class="callout-subtext">
            Cognigy Helpcenter article
      </div>
   </div>
</blockquote>
````

Version Badge template

````
[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)]({{config.site_url}})
````