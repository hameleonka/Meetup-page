(function () {
    const speakersIconBack = document.querySelector('.speakers-section-move-icon.icon-back');
    const speakersIconForward = document.querySelector('.speakers-section-move-icon.icon-forward');
    const speakersSection = document.querySelector('.speakers-section');
    const firstSpeakersSectionUnit = document.querySelector('.speakers-section-unit:first-child');

    const numberOfSpeakers = 8;

    var firstSpeakersSectionUnitMarginRight = parseFloat(window.getComputedStyle(firstSpeakersSectionUnit, null).getPropertyValue('margin-right'));
    var speakersSectionUnitShift = parseFloat(getComputedStyle(speakersSection).width) + firstSpeakersSectionUnitMarginRight;
    var marginLeftMaxValueForward = -(speakersSectionUnitShift) * (numberOfSpeakers - 1);

    const marginLeftMaxValueBack = 0;
    window.addEventListener('resize', function () {
        firstSpeakersSectionUnit.style.marginLeft = marginLeftMaxValueBack + 'px';
        firstSpeakersSectionUnitMarginRight = parseFloat(window.getComputedStyle(firstSpeakersSectionUnit, null).getPropertyValue('margin-right'));
        speakersSectionUnitShift = parseFloat(getComputedStyle(speakersSection).width) + firstSpeakersSectionUnitMarginRight;
        marginLeftMaxValueForward = -(speakersSectionUnitShift) * (numberOfSpeakers - 1);
    })

    speakersIconForward.addEventListener('click', function (event) {
        event.preventDefault();
        var firstSpeakersSectionUnitBeforeClickMarginLeft = parseFloat(window.getComputedStyle(firstSpeakersSectionUnit, null).getPropertyValue("margin-left"));
        var firstSpeakersSectionUnitAfterClickMarginLeft = firstSpeakersSectionUnitBeforeClickMarginLeft + (-speakersSectionUnitShift);
        if (firstSpeakersSectionUnitAfterClickMarginLeft > marginLeftMaxValueForward) {
            firstSpeakersSectionUnit.style.marginLeft = firstSpeakersSectionUnitAfterClickMarginLeft + 'px';
            speakersIconBack.classList.remove('disabled');
        } else {
            firstSpeakersSectionUnit.style.marginLeft = marginLeftMaxValueForward + 'px';
            speakersIconForward.classList.add('disabled');
        }
    });

    speakersIconBack.addEventListener('click', function (event) {
        event.preventDefault();
        var firstSpeakersSectionUnitBeforeClickMarginLeft = parseFloat(window.getComputedStyle(firstSpeakersSectionUnit, null).getPropertyValue("margin-left"));
        var firstSpeakersSectionUnitAfterClickMarginLeft = firstSpeakersSectionUnitBeforeClickMarginLeft + speakersSectionUnitShift;
        if (firstSpeakersSectionUnitAfterClickMarginLeft < marginLeftMaxValueBack) {
            firstSpeakersSectionUnit.style.marginLeft = firstSpeakersSectionUnitAfterClickMarginLeft + 'px';
            speakersIconForward.classList.remove('disabled');
        } else {
            firstSpeakersSectionUnit.style.marginLeft = marginLeftMaxValueBack + 'px';
            speakersIconBack.classList.add('disabled');
        }
    });
}());


