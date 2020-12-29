class Element {
  constructor(active, base_config,config,icon,id,name,ordering,slug) {
    this.base_config = base_config;
    this.config = config;
    this.id = id;
    this.name = name;
    this.ordering = ordering;
    this.slug = slug;
  }
}

export default Element;
