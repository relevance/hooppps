module ApplicationHelper

  def back_button
    if request.referer =~ /http:\/\/([^\/]*)\//
      refering_host = $1
      if request.url =~ /http:\/\/([^\/]*)\//
        current_host = $1
        "<a class='back_button' href='javascript:window.history.back()'>Back</a>" if refering_host == current_host
      end
    end
  end

  def resource(request)
    return request.url.delete(request.query_string).delete("?")
  end

end
