module ApplicationHelper
  def body_id
    "body_#{controller.controller_name}_#{controller.action_name}"
  end
end
