module ApplicationHelper
  def module_script_tag(module_name)
    "<script>new #{module_name.camelcase}()</script>".html_safe
  end
end
