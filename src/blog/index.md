---
title: 📖 Blog
layout: layout.liquid
---

# {{ title }}

### A collection of ramblings, writings and stuff I want to say.

{% for blog in collections.blog %}
#### [{{blog.data.title}}]({{blog.url}})
{% endfor %}