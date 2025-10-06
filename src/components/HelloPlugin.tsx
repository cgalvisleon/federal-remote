export default function HelloPlugin() {
  return <div>👋 Hola desde HelloPlugin</div>;
}

HelloPlugin.version = "0.0.1";
HelloPlugin.kind = "component";
HelloPlugin.help = {
  name: "Button",
  description: "Botón de ejemplo",
  params: {},
  methods: {},
};
