---
title: 👨‍💻 Work
layout: layout.liquid
---

<h1 class="my-12 text-6xl font-bold">{{ title }}</h1>

<div class="work">

    {%- for work in collections.work reversed -%}

        <div class="work__item mt-6">
            <h4 class="text-3xl md:text-4xl font-bold">
                <a href="{{work.url}}">{{ work.data.title }}</a>
                <small>{{ work.data.completeDate }}</small>
            </h4>
            <p>{{ work.data.tech }}</p>
        </div>
    
    {%- endfor -%}

</div>