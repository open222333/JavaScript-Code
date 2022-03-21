// html form表單 處理範例

/*
範例

<div class="btn-group">
	<label class="btn btn-default btn-sm">
		<form>
			<span>一鍵修改域名</span>
			<input type="text" id="changedomain_target" />
			<input type="submit" class="btn btn-sm btn-success" value="提交" onclick="batchChangeDomain();"/>
		</form>
	</label>
</div>
*/

function batchChangeDomain() {
  let targetDomain = document.getElementById('changedomain_target');
  $.ajax({
    method: 'post',
    url: 'batch_change_domain',
    data: {
      _token: LA.token,
      target_domain: targetDomain,
    },
    success: function (response) {
      if (response['message'] == 'ok') {
        toastr.success('一鍵更換域名操作成功');
        $.pjax.reload('#pjax-container');
      }
      else {
        toastr.error(response['message']);
      }
    },
    error: function () {
      toastr.error('一鍵更換域名操作失敗');
    },
  });
}