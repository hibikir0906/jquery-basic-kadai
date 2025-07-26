$(function() {
  // 文字色を赤に変える
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });

  // 文字内容を「こんばんは！」に変える
  $('#change-text').on('click', function() {
    $('#target').text('こんばんは！');
  });

  // フェードアウト（非表示）
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  // フェードイン（再表示）
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});