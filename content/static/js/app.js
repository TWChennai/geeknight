var lastId, topMenu, topMenuHeight, menuItems, scrollItems;

function getAgenda(event, id, value) {
  $('.speakers').removeClass("active");
  $('.event').removeClass("active");
  $(event.target).addClass("active");
  $("[id='" + id + '-' + value.trim() + "']").addClass("active");
}

function getEventsFor(id, value) {
  value = value.trim();
  $('.year').removeClass("active");
  $('.event').removeClass("show");
  $('.event').removeClass("active");
  $('#' + id).addClass("active");
  var months = $("*[id*=" + value + "]");
  months.addClass("show");
  $("#"+value).trigger("click");
  $('div.select-styled')[1].textContent=$('#'+value).text()
}

function setClickListiners() {
  topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight() + 80,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  menuItems.click(function(e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });
}

function highlightMenu() {
  var fromTop = $(this).scrollTop() + (topMenuHeight * 4);

  if (!scrollItems) return;

  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    menuItems.parent()
      .removeClass("active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("active");
  }
}

function archiveListForMobile() {
	$('.select').each(function() {
		var $this = $(this),
			numberOfOptions = $(this).children('div').length;

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');
		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('div').eq(0).text());

		var $list = $('<ul />', {
			class: 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('div').eq(i).text(),
				id: $this.children('div').eq(i)[0].id,
				class: $this.children('div').eq(i).attr('class')
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').each(function() {
					$(this).removeClass('active')
						.next('ul.select-options')
            .hide();
            styledSelect.text();
        }
      );
			$(this).toggleClass('active')
				.next('ul.select-options')
				.toggle();
		});
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			var selectedId = $(this).attr('id');
			var selectedValue = $(this)[0].textContent;
      $this.val(selectedValue);
      (selectedValue.length === 4 && selectedId.length > 4)? getEventsFor(selectedId, selectedValue): getAgenda(e, selectedId, selectedValue);
      $list.hide();
		});

		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	});
}

$(document).ready(function() {
  $($(".months")[0].childNodes[1]).addClass("active");
  setClickListiners();
  highlightMenu();
  trimLongDescription();
  archiveListForMobile();
});

$(document).scroll(function() {
  $("#header").toggleClass("shadow", $(this).scrollTop() > 600);
  highlightMenu();
});

function toggleReadMore(event) {
  $(event.target).prev().prev().toggleClass("show");
}

function trimLongDescription() {
  $.each($('.subtitle'), function(index, subtitle) {
    if ($(subtitle).text().length > 500) {
      $(subtitle).after('<input id="toggle-' + index + '" class="toggle" type="checkbox"><label onclick=toggleReadMore(event) class="read-more" for="toggle-' + index + '"></label>');
    }
  });
}