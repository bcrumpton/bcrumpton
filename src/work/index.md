---
title: 👨‍💻 Work
layout: layout.liquid
---

<h1 class="mt-8 text-6xl font-bold">{{ title }}</h1>

<h3 class="mt-8 text-4xl font-bold">The projects that have led me here.</h3>

<div class="work">

    {%- for work in collections.work reversed -%}

        <div class="work__item mt-6">
            <h4 class="text-5xl font-bold">
                <a href="{{work.url}}">{{ work.data.title }}</a>
                <small>{{ work.data.completeDate }}</small>
            </h4>
            <p>{{ work.data.tech }}</p>
        </div>
    
    {%- endfor -%}

</div>