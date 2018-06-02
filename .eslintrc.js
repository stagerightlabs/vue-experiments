module.exports = {
  root: true,
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  rules: {
    "no-param-reassign": [2, { props: false }],
    "import/no-unresolved": 0
  }
};
